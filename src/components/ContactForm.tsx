import { useRef, useState, type FormEvent, type RefObject } from 'react'
import { contactCopy } from '../data/content'
import type { RequestType } from '../types'
import { validateMessage, validateName, validatePhone } from '../lib/validation'
import { CheckIcon } from './Icons'

type FieldName = 'name' | 'phone' | 'message'
type FormValues = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>
type SubmitStatus = 'idle' | 'submitting' | 'demo-complete'

const FIELD_ORDER: FieldName[] = ['name', 'phone', 'message']
const EMPTY_VALUES: FormValues = { name: '', phone: '', message: '' }

const validators: Record<FieldName, (value: string) => string | undefined> = {
  name: validateName,
  phone: validatePhone,
  message: validateMessage,
}

const requestOptions: { value: RequestType; label: string }[] = [
  { value: 'buy', label: 'خرید' },
  { value: 'sell', label: 'فروش' },
  { value: 'rent', label: 'اجاره' },
  { value: 'other', label: 'سایر' },
]

// Demo only: there is no backend, so nothing is sent anywhere.
// To connect a real endpoint (a form service or an API route), replace the body of this
// function with a fetch() request that posts `values`, and handle its response.
function submitContactRequest(_values: FormValues): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 900)
  })
}

interface ContactFormProps {
  requestType: RequestType | ''
  onRequestTypeChange: (value: RequestType | '') => void
}

export function ContactForm({ requestType, onRequestTypeChange }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const fieldRefs: Record<FieldName, RefObject<HTMLElement | null>> = {
    name: nameRef,
    phone: phoneRef,
    message: messageRef,
  }

  function updateValue(field: FieldName, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }))
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: validators[field](value) }))
    }
  }

  function validateField(field: FieldName) {
    setErrors((previous) => ({ ...previous, [field]: validators[field](values[field]) }))
  }

  function resetForm() {
    setValues(EMPTY_VALUES)
    setErrors({})
    setStatus('idle')
    onRequestTypeChange('')
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors: FormErrors = {}
    FIELD_ORDER.forEach((field) => {
      nextErrors[field] = validators[field](values[field])
    })
    setErrors(nextErrors)

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus()
      return
    }

    setStatus('submitting')
    void submitContactRequest(values).then(() => setStatus('demo-complete'))
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className="form-card" onSubmit={handleContactSubmit} noValidate aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="form-card__title">
        {contactCopy.submit}
      </h3>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">نام و نام‌خانوادگی</label>
          <input
            id="contact-name"
            ref={nameRef}
            className="input"
            type="text"
            name="name"
            autoComplete="name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby="contact-name-error"
            onChange={(event) => updateValue('name', event.target.value)}
            onBlur={() => validateField('name')}
          />
          <p id="contact-name-error" className="field-error" aria-live="polite">
            {errors.name}
          </p>
        </div>

        <div className="field">
          <label htmlFor="contact-phone">شماره تماس</label>
          <input
            id="contact-phone"
            ref={phoneRef}
            className="input input--ltr"
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder="09xxxxxxxxx"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby="contact-phone-error"
            onChange={(event) => updateValue('phone', event.target.value)}
            onBlur={() => validateField('phone')}
          />
          <p id="contact-phone-error" className="field-error" aria-live="polite">
            {errors.phone}
          </p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-request-type">نوع درخواست (اختیاری)</label>
        <select
          id="contact-request-type"
          className="input"
          name="requestType"
          value={requestType}
          onChange={(event) => onRequestTypeChange(event.target.value as RequestType | '')}
        >
          <option value="">انتخاب کنید</option>
          {requestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="contact-message">پیام شما</label>
        <textarea
          id="contact-message"
          ref={messageRef}
          className="input input--textarea"
          name="message"
          rows={5}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby="contact-message-error"
          onChange={(event) => updateValue('message', event.target.value)}
          onBlur={() => validateField('message')}
        />
        <p id="contact-message-error" className="field-error" aria-live="polite">
          {errors.message}
        </p>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? contactCopy.submitting : contactCopy.submit}
        </button>
        <button type="button" className="btn btn--ghost" onClick={resetForm} disabled={isSubmitting}>
          {contactCopy.reset}
        </button>
      </div>

      <div className="form-status" role="status">
        {status === 'demo-complete' && (
          <div className="form-notice">
            <CheckIcon />
            <p>{contactCopy.demoSuccess}</p>
          </div>
        )}
      </div>

      <p className="form-note">{contactCopy.demoNote}</p>
    </form>
  )
}

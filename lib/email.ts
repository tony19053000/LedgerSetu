import { OTPEmail } from "@/components/emails/otp-email"
import React from "react"
import { Resend } from "resend"
import config from "./config"

let _resend: Resend | null = null

export function getResendClient(): Resend {
  if (!_resend) {
    _resend = new Resend(config.email.apiKey || "re_placeholder_not_configured")
  }
  return _resend
}

export async function sendOTPCodeEmail({ email, otp }: { email: string; otp: string }) {
  const html = React.createElement(OTPEmail, { otp })

  return await getResendClient().emails.send({
    from: config.email.from,
    to: email,
    subject: "Your LedgerSetu verification code",
    react: html,
  })
}



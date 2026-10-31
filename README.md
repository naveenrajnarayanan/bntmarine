
# BNT Marine

## Enquiry form email delivery

The enquiry form sends messages through [Resend](https://resend.com/) to
`sales@bntmarine.com`. To enable delivery:

1. Create a Resend API key and verify the domain used for the sender address.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in `.env.local` using the API key
   and a sender address on the verified domain.
4. Add the same variables to the production hosting environment before deploying.

The API key must remain server-side and must not use a `NEXT_PUBLIC_` prefix.

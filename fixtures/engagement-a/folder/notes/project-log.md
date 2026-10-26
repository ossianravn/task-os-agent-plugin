# Acme project log

## 2026-09-08 — Kickoff with Karen
- Mandate: fix ecommerce tracking on the webshop and build a checkout funnel report for Karen's monthly review.
- Success, as Karen put it: GA4 purchases within 2% of the shop backend's orders, per payment method, by the end of October.
- Karen decides scope and priorities. Jonas owns the site and the releases. Mette owns the order report.
- Weekly update to Karen on Fridays.

## 2026-09-10
- Jonas gave me Analyst access to both GA4 properties and read access to GTM.
- Azure DevOps access still pending.

## 2026-09-15 — August numbers
- GA4 (123456): 4,789 purchases in August.
- Mette's order report: 5,840 orders in August.
- GA4 is about 18% below the backend.
- Mette: the order report counts an order when the payment is captured and leaves out cancelled orders.

## 2026-09-17
- Found the GA4 configuration tag firing twice on the checkout pages. Jonas says it came in with release 4.9. He opened ACME-1187.

## 2026-09-22
- Jonas: duplicate tags removed, ships in 4.12 tomorrow.

## 2026-09-24 — Root cause
- 4.12 went out yesterday (ACME-1187).
- Root cause of the purchase gap: the cookie consent banner blocks GA4 until the user accepts, and Consent Mode is not set up, so purchases from users who decline are never sent.
- Plan: ask Jonas to set up Consent Mode v2.

## 2026-09-29 — After 4.12
- GA4, 23–28 Sep: 1,172 purchases (export in client-files/analytics/).
- Mette's report for the same days: 1,412 orders.
- Still 17% short. The duplicate-tag fix did not close the gap.

## 2026-10-06 — Consent is not it
- Went through the GTM container with Jonas. Consent Mode v2 is set up in advanced mode and has been since June. My root cause from 24 Sep was wrong.
- Screenshot of the consent settings: client-files/screenshots/gtm-consent-settings.png
- Mette split her 23–28 Sep orders by payment method: card 968, MobilePay 431, Klarna 13.
- Against GA4: card 951 (1.8% short), MobilePay 212 (51% short), Klarna 9.
- The gap sits almost entirely in MobilePay.

## 2026-10-08
- Hypothesis, not checked yet: MobilePay customers pay in the app, and many never come back to /kassen/bekraeftelse, where the purchase event fires.
- Jonas thinks the purchase event could be sent from the server when MobilePay confirms the payment.

## 2026-10-13
- Jonas opened ACME-1204: send the purchase event for MobilePay from the server on payment confirmation. Status In Progress. He expects it on staging this week.
- Next: when ACME-1204 is on staging, place a MobilePay test order and check that the purchase arrives in the staging property (123457) with a transaction_id. Then tell Karen in Friday's update.

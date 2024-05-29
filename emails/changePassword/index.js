module.exports = (
  lang = 'en',
  {
    profile: { firstname: firstName, lastname: lastName },
    logo,
  }) => {
  const t =  require('./translations/' + lang +'.json')
  return {
  unsub: false,
  logo,
  preview: t['your-wprn-referent-account-password-has-been-modified'],
  emailSubject: t['your-wprn-referent-account-password-has-been-modified'],
  content: `<p>${t['dear']} ${firstName} ${lastName},</p>
  <p>${t['the-password-of-your-wprn-referent-account-has-been-correctly-updated']}.</p>
  <p>${t['if-you-did-not-request-this-password-change-please-contact-us-at-referents-wprn-org-to-report-it']}.</p>
  <p>${t['thank-you-again-for-contributing-to-wprn-a-commons-for-research']}</p>
  <p><b>Cesare</b>, <b>C</b>ommon <b>e</b>lectronic <b>s</b>ecretariate <b>a</b>gent of <b>re</b>ferents </p>
  <p>${t['5']}.</p>`,
  textContent: `${t['dear']} ${firstName} ${lastName},
  ${t['the-password-of-your-wprn-referent-account-has-been-correctly-updated']}.

  ${t['if-you-did-not-request-this-password-change-please-contact-us-at-referents-wprn-org-to-report-it']}.

  ${t['thank-you-again-for-contributing-to-wprn-a-commons-for-research']}!

  Cesare, Common electronic secretariate agent of referents
  ${t['5']}
  `
}}

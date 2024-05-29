module.exports = ({
  domainName,
  name: projectName,
  pubId,
  key,
  periodicity,
  contact: { firstname: firstName, lastname: lastName, entity },
}) => ({
  unsub: true,
  link: `https://${domainName}/edit/${pubId}/${key}`,
  preview: "Your IPSP alert for projects similars to yours has been created",
  emailSubject:
    "Your IPSP alert for projects similars to yours has been created",
  content: `<p>Dear ${firstName} ${lastName},</p>
  <p>Your alert for projects similar to your project named "${projectName}" has been created. </p>
  <p>As you requested, you will be notified  ${periodicity.toLowerCase()} by email of projects matching your criteria</p>
 
  <p>You can edit or remove this alert any time using the project edition link included at the end of this email.</p>
  <p>On behalf of IPSP, many thanks to you and to your institution ${entity} for contributing to this commons for research.</p>
  <p>Kind regards,</p>
  <p><b>Ana.Nisow</b>, <b>A</b>utomatic <b>n</b>ews <b>a</b>gent <b>N</b>otifying <b>i</b>nteresting <b>s</b>tuff <b>o</b>n IPSP,</p>
  <p>on behalf of IPSP.org.</p>`,
  textContent: `Dear ${firstName} ${lastName},
   Your alert for projects similar to your project named "${projectName}" has been created. 
   As you requested, you will be notified  ${periodicity.toLowerCase()} by email of projects matching your criteria.
   
  You can edit or remove this alert any time using the project edition link included at the end of this email.
  On behalf of IPSP, many thanks to you and to your institution ${entity} for contributing to this commons for research.
  
  Kind regards,

  Ana.Nisow, Automatic news agent, Notifying interesting stuff on IPSP,
  on behalf of IPSP.org.`,
})

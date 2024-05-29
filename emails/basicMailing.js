module.exports = ({
  logo,
  firstname: firstName,
  lastname: lastName,
  preview,
  subject,
  text,
  content,
  link,
}) => ({
  logo,
  unsub: link && link.length > 0,
  link,
  preview,
  emailSubject: subject,
  content: `<p>Dear ${firstName} ${lastName},</p>
  ${content}`,
  textContent: `Dear ${firstName} ${lastName},
  ${text}`,
})
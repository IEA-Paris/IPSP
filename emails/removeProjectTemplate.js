module.exports = ({
  domainName,
  name,
  pubId,
  key,
  removalDate,
  contact: { firstname: firstName, lastname: lastName },
}) => ({
  unsub: true,
  link: `https://${domainName}/edit/${pubId}/${key}`,
  preview: `Your project "${name}" has been removed from TheSocioscope`,
  emailSubject: `Your project "${name}" has been removed from TheSocioscope`,
  content: `<p>Hello ${firstName} ${lastName},</p>

        <p>Your project "${name}" has been correctly removed from TheSocioscope.</p>
        <p>You can use the edit link to put it back online during the next two weeks. If not, it will be permanently deleted at the following date : ${removalDate}.</p>
        <p>Feel free to contact us to share your experience, we will be happy to make it better the next time. </p>
        
        <p>We hope to see you soon!</p>
        <p>Best, </p>
        <p>TheSocioscope team
        </p>
        `,
  textContent: `Hello ${firstName} ${lastName},
        Your project "${name}" has been correctly removed from TheSocioscope.
        You can use the edit link to put it back online during the next two weeks. If not, it will then be permanently deleted at the following date : ${removalDate}.
        Feel free to contact us to share your experience, we will be happy to make it better the next time. 
         We hope to see you soon!
        Best, 
        TheSocioscope team
        `,
})

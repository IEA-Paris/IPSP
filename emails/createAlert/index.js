module.exports = (
  lang,
  {
    logo,
    name: projectName,
    pubId,
    key,
    periodicity,
    contact: { firstname: firstName, lastname: lastName, entity },
  }
) => {
  const t = require("./translations/" + lang || "en" + ".json")
  return {
    logo,
    unsub: true,
    link: `https://TheSocioscope.org/edit/${pubId}/${key}`,
    preview: t.subject,
    emailSubject: t.subject,
    content: `<p>${t["dear"]} ${firstName} ${lastName},</p>
  <p>${
    t["your-alert-for-projects-similar-to-your-project-named"]
  }"${projectName}" ${t["has been created"]}.</p>
  <p>${
    t["as-you-requested-you-will-be-notified"]
  } ${periodicity.toLowerCase()} ${
      t["by-email-of-projects-matching-your-criteria"]
    }</p>
 
  <p>${
    t[
      "you-can-edit-or-remove-this-alert-any-time-using-the-project-edition-link-included-at-the-end-of-this-email"
    ]
  }.</p>
  <p>${t["2"]} ${entity} ${t["3"]}.</p>
  <p>${t["4"]},</p>
  <p><b>Ana.Nisow</b>, <b>A</b>utomatic <b>n</b>ews <b>a</b>gent <b>N</b>otifying <b>i</b>nteresting <b>s</b>tuff <b>o</b>n <b>W</b>PRN</p>
  <p>${t["5"]}.</p>`,
    textContent: `${t["dear"]} ${firstName} ${lastName},
   ${
     t["your-alert-for-projects-similar-to-your-project-named"]
   }"${projectName}" ${t["has been created"]}. 
   ${t["as-you-requested-you-will-be-notified"]} ${periodicity.toLowerCase()} ${
      t["by-email-of-projects-matching-your-criteria"]
    }.
  https://TheSocioscope.org/verify/${pubId}/${key} 
  ${
    t[
      "you-can-edit-or-remove-this-alert-any-time-using-the-project-edition-link-included-at-the-end-of-this-email"
    ]
  }.
  ${t["2"]} ${entity} ${t["3"]}.
  
  ${t["4"]},

  Ana.Nisow, Automatic news agent, Notifying interesting stuff on TheSocioscope,
  ${t["5"]}.`,
  }
}

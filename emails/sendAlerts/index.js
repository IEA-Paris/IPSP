module.exports = (
  { logo, domainName, pubId, key, name, projects, firstname, lastname },
  lang = "en"
) => {
  const t = require("./translations/" + lang + ".json")
  return {
    logo,
    unsub: true,
    link: `https://${domainName}/edit/${pubId}/${key}`,
    preview: `${t.subject} "${name}"`,
    emailSubject: `${t.subject} "${name}"`,
    content: `<p>${t["dear"]} ${firstname} ${lastname},</p>
  <p>${t["1"]} "${name}" ${t["2"]}:</p>
<ul>
${Object.keys(projects.slice(0, 10))
  .map(
    (k) =>
      `<li><a href="https://${domainName}/item/${projects[k].pubId}">${projects[k].name}</a></li>`
  )
  .join("")}
</ul>
  <p>${t["3"]}.</p>
  <p>${t["4"]},</p>
  <p><b>Ana.Nisow</b>, <b>A</b>utomatic <b>n</b>ews <b>a</b>gent <b>N</b>otifying <b>i</b>nteresting <b>s</b>tuff <b>o</b>n <b>W</b>PRN</p>
  <p>${t["5"]}.</p>`,
    textContent: `${t["dear"]} ${firstname} ${lastname}
${t["1"]} "${name}" ${t["2"]}:
${Object.keys(projects.slice(0, 10))
  .map(
    (k) =>
      `- ${projects[k].name} (https://${domainName}/item/${projects[k].pubId})`
  )
  .join("")}
${t["3"]}
${t["4"]},

Ana.Nisow, Automatic news agent, Notifying interesting stuff on TheSocioscope,
${t["5"]}.`,
  }
}

module.exports = (
  lang,
  {
    logo,
    domainName,
    name,
    pubId,
    key,
    contact: { firstname: firstName, lastname: lastName },
  }) => {
  const t = require('./translations/' + lang + '.json')
  return {
    logo,
    unsub: true,
    link: `https://${domainName}/edit/${pubId}/${key}?remove=true`,
    preview: `${t['your_project']} "${name}" ${t['is-published']}.`,
    emailSubject: `${t['your_project']} "${name}" ${t['is-published']}.`,
    content: `<p>${t['dear']} ${firstName} ${lastName},</p>

      <p>${t['thank-you']} ${t['your_project']} "${name}" ${t['1']}: https://${domainName}/item/${pubId}. </p>
      <p>${t['2']}: https://${domainName}/edit/${pubId}/${key}.</p>
      <p>${t['3']}.</p>

      <p>${t['4']}.</p>

      <p>${t['5']}</p>

      <p>${t['7']}.</p>

      <p><b>Filipeda</b>, <b>Fi</b>rst <b>li</b>nk for <b>p</b>ublication and <b>e</b>dit or <b>d</b>elete <b>a</b>ffordance confirmation bot, </p>
      <p>${t['9']}</p>
      `,
    textContent: `${t['dear']} ${firstName} ${lastName},

      ${t['thank-you']} ${t['your_project']} "${name}" ${t['1']}: https://${domainName}/item/${pubId}.
      ${t['2']}: https://${domainName}/edit/${pubId}/${key}.
      ${t['3']}.

      ${t['4']}.

      ${t['5']}

      ${t['7']}.

      Filipeda
      First link for publication and edit or delete affordance confirmation bot,
      ${t['9']}
      `,
  }
}

const html = require('../../../utils/html')

module.exports = (
  lang,
  {
    project: {
      contact: { firstname, lastname },
      name,
    },
    args: { reason, content },
    logo,
  }) => {
  const t = require('./translations/' + lang || 'en' + '.json')
  return {
    logo,
    unsub: false,
    preview: `${t['your_project']} "${name}" ${t['has_been_rejected']}`,
    content: `<p>${t['dear']} ${firstname} ${lastname},</p>
        <p>${t['your_project']} "${name}" ${t['1']} ${lang === 'en' ? '' : '(In english)'}:</p>
        ${reason === 'Other'
        ? '<p><b>Custom reason</b></p>'
        : `<p><b>${reason}</b></p>`
      }
        ${content ? `<p><i>${html(content)}</i></p>` : ''}
        <p>${t['3']}.</p>
        <p>${t['4']},</p>
        <p><b>Cesare</b>, <b>C</b>ommon <b>e</b>lectronic <b>s</b>ecretariat <b>a</b>gent of <b>re</b>ferents </p>
        <p>${t['5']}</p>
        `,
    textContent: `${t['dear']} ${firstname} ${lastname},
        ${t['your_project']} "${name}" ${t['1']} ${lang === 'en' ? '' : '(In english)'}:
        ${reason === 'Other' ? ' Custom reason ' : ` ${reason} `}
        ${content ? ` ${content} ` : ''}
        ${t['3']}.
        ${t['4']},
        Cesare, Common electronic secretariat agent of referents
        ${t['5']}
        `,
    emailSubject: `${t['your_project']} "${name}" ${t['has_been_rejected']}.`,
  }
}

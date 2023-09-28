import React, { Fragment } from "react";

import Cards from "./cards"

import "./info.css"

const Info = () => {
  const cardOne = [
    {
      name : "سابق و لاحق",
      desc : "يحكي المسلسل عن طفلان يحلمان أن يفوزا بلقب العالم في رياضة السيارات, الأول سابق وهو متهور ومغرور ولكنه طيب جداً وفكاهى أيضاً ولديه حماس كبير، والثاني لاحق وهو محترم ومجتهد ومتواضع",
      link: "https://www.dimakids.com/sabeqwala7eqs-1415604494-series.html"
    },
    {
      name : "يوجي يو",
      desc : "حدثت أسطورة منذ خمسة آلاف سنة فقد لعب الفراعنة المصريين لعبة سحرية أشبه بمبارزة الوحوش وهذه اللعبة القديمة تتعلق بطقوس سحرية, والتي تستخدم لمعرفة المستقبل وتحديد مصير شخص ما وتدعى بلعبة الظل لكن الوحوش كانت حقيقية ",
      link: "https://www.dimakids.com/yugiohs-1405905767-series.html"
    },
    {
      name : "بي بليد",
      desc : "تبداء قصتنا مع منصور الذي يحلم بان يكون بطل العالم في لعببة بي بليد و بعد فترة من الزمن يصبح لديه اصدقاء و يكونون فريق لخوض المباريات ",
      link: "https://www.dimakids.com/beyblades-1412791266-series.html"
    }
  ]

  return(
    <Fragment>
      <div className="mainContainer">
        <div className="mainHeading"><h1>انمي الزمن الجميل</h1></div>
        <div className="container">
          <Cards infocards={cardOne} />
        </div>
      </div>
    </Fragment>
  )
}
export default Info

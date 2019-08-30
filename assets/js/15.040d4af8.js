(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(e,s,n){"use strict";n.r(s);var t=n(0),i=Object(t.a)({},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Le Système National d'Observation de la Sécurité des Activités Nautiques (SNOSAN) est un observatoire interministériel qui répond à la volonté de mieux connaître les caractéristiques des accidents relatifs à la plaisance et aux activités nautiques récréatives et sportives en eaux françaises.")]),e._v(" "),n("p",[e._v("Le SNOSAN dispose d'un "),n("a",{attrs:{href:"https://www.snosan.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("site web"),n("OutboundLink")],1),e._v(" et d'"),n("a",{attrs:{href:"https://outils.snosan.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("un portail listant les différents outils"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("On définit qu'une opération rentre dans le cadre d'étude du SNOSAN dès lors que :")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("Le SNOSAN s'intéresse aux opérations relevant de la plaisance ou des loisirs nautiques. Il peut être nécessaire de ne s'intéresser qu'à certaines activités. Voici les différents cas et les filtres à appliquer :")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("Vous pouvez contacter le SNOSAN par message électronique aux adresses :")]),e._v(" "),e._m(8)])},[function(){var e=this.$createElement,s=this._self._c||e;return s("h1",{attrs:{id:"le-snosan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#le-snosan","aria-hidden":"true"}},[this._v("#")]),this._v(" Le SNOSAN")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"presentation-du-snosan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#presentation-du-snosan","aria-hidden":"true"}},[this._v("#")]),this._v(" Présentation du SNOSAN")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"operations-cross-dans-le-cadre-d-etude-du-snosan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operations-cross-dans-le-cadre-d-etude-du-snosan","aria-hidden":"true"}},[this._v("#")]),this._v(" Opérations CROSS dans le cadre d'étude du SNOSAN")])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Le SNOSAN s'intéresse aux opérations relevant de la plaisance ou des loisirs nautiques. Une colonne est dédiée au SNOSAN ("),s("code",[this._v("operations_stats.concerne_snosan")]),this._v("), permettant de savoir immédiatement si une opération rentre dans le cadre d'étude du SNOSAN ou non.")])},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ul",[n("li",[e._v("un flotteur de plaisance est impliqué dans l'opération")]),e._v(" "),n("li",[e._v("un flotteur de loisirs nautiques est impliqué dans l'opération")]),e._v(" "),n("li",[e._v("aucun flotteur n'est impliqué dans l'opération et le motif de déclenchement de l'opération est l'un des suivants :\n"),n("ul",[n("li",[e._v("Absence d'un moyen de communication")]),e._v(" "),n("li",[e._v("Accident aéronautique")]),e._v(" "),n("li",[e._v("Accident en mer")]),e._v(" "),n("li",[e._v("Autre accident")]),e._v(" "),n("li",[e._v("Autre événement")]),e._v(" "),n("li",[e._v("Baignade")]),e._v(" "),n("li",[e._v("Blessé EvaMed")]),e._v(" "),n("li",[e._v("Blessé EvaSan")]),e._v(" "),n("li",[e._v("Blessé projection d'une équipe médicale")]),e._v(" "),n("li",[e._v("Chasse sous-marine")]),e._v(" "),n("li",[e._v("Chute falaise / Emporté par une lame")]),e._v(" "),n("li",[e._v("Disparu en mer")]),e._v(" "),n("li",[e._v("Découverte de corps")]),e._v(" "),n("li",[e._v("Homme à la mer")]),e._v(" "),n("li",[e._v("Incertitude sur la position")]),e._v(" "),n("li",[e._v("Isolement par la marée / Envasé")]),e._v(" "),n("li",[e._v("Malade EvaMed")]),e._v(" "),n("li",[e._v("Malade EvaSan")]),e._v(" "),n("li",[e._v("Plongée avec bouteille")]),e._v(" "),n("li",[e._v("Plongée en apnée")]),e._v(" "),n("li",[e._v("Sans avarie en dérive")]),e._v(" "),n("li",[e._v("Sans avarie inexpérience")]),e._v(" "),n("li",[e._v("Ski nautique")])])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"filtres-classiques"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filtres-classiques","aria-hidden":"true"}},[this._v("#")]),this._v(" Filtres classiques")])},function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ul",[n("li",[n("strong",[e._v("Plaisance uniquement")]),e._v(" : "),n("code",[e._v("concerne_snosan")]),e._v(" à vrai, "),n("code",[e._v("nombre_flotteurs_plaisance_impliques")]),e._v(" >= 1, "),n("code",[e._v("nombre_flotteurs_loisirs_nautiques_impliques")]),e._v(" = 0, "),n("code",[e._v("sans_flotteur_implique")]),e._v(" à faux. Ceci est disponible dans une requête prédéfinie dans Redash par le mot clé "),n("code",[e._v("snosan_plaisance")])]),e._v(" "),n("li",[n("strong",[e._v("Loisirs nautiques uniquement")]),e._v(" : "),n("code",[e._v("concerne_snosan")]),e._v(" à vrai, "),n("code",[e._v("nombre_flotteurs_plaisance_impliques")]),e._v(" = 0, "),n("code",[e._v("nombre_flotteurs_loisirs_nautiques_impliques")]),e._v(" >= 1, "),n("code",[e._v("sans_flotteur_implique")]),e._v(" à faux. Ceci est disponible dans une requête prédéfinie dans Redash par le mot clé "),n("code",[e._v("snosan_loisirs_nautiques")])]),e._v(" "),n("li",[n("strong",[e._v("Plaisance et loisirs nautiques (avec plongée)")]),e._v(" : "),n("code",[e._v("concerne_snosan")]),e._v(" à vrai, "),n("code",[e._v("sans_flotteur_implique")]),e._v(" à faux. Ceci est disponible dans une requête prédéfinie dans Redash par le mot clé "),n("code",[e._v("snosan_plaisance_loisirs_nautiques_plongee")])]),e._v(" "),n("li",[n("strong",[e._v("Plaisance et loisirs nautiques (sans plongée)")]),e._v(" : "),n("code",[e._v("concerne_snosan")]),e._v(" à vrai, "),n("code",[e._v("sans_flotteur_implique")]),e._v(" à faux, "),n("code",[e._v("concerne_plongee")]),e._v(" à faux. Ceci est disponible dans une requête prédéfinie dans Redash par le mot clé "),n("code",[e._v("snosan_plaisance_loisirs_nautiques")])]),e._v(" "),n("li",[n("strong",[e._v("Uniquement la plongée")]),e._v(" : "),n("code",[e._v("concerne_plongee")]),e._v(" à vrai. Ceci est disponible dans une requête prédéfinie dans Redash par le mot clé "),n("code",[e._v("snosan_plongee")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("h2",{attrs:{id:"contact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contact","aria-hidden":"true"}},[this._v("#")]),this._v(" Contact")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[s("code",[this._v("contact@snosan.fr")]),this._v(" pour les problématiques métier ;")]),this._v(" "),s("li",[s("code",[this._v("tech@snosan.fr")]),this._v(" pour les problématiques techniques.")])])}],!1,null,null,null);i.options.__file="snosan.md";s.default=i.exports}}]);
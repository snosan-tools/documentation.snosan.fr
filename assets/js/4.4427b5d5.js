(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"changements-sur-le-jeu-de-donnees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changements-sur-le-jeu-de-donnees","aria-hidden":"true"}},[e._v("#")]),e._v(" Changements sur le jeu de données")]),e._v(" "),a("p",[e._v("Les changements de schéma du jeu de données SECMAR sont répertoriés ci-dessous.")]),e._v(" "),a("h3",{attrs:{id:"_2018-10-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-10-22","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-10-22")]),e._v(" "),a("p",[e._v("Ajout de colonnes concernant la marée. On ajoute des informations sur la marée pour les opérations se déroulant sur les façades Atlantique et de la Manche, pour les opérations se déroulant à moins de 20km des côtes. Une trentaine de ports de référence sont utilisés pour avoir les coefficients des marées, jour par jour, depuis 1985.")]),e._v(" "),a("p",[e._v("Ajout des colonnes suivantes :")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("operations_stats.maree_port")])]),e._v(" "),a("li",[a("code",[e._v("operations_stats.maree_coefficient")])]),e._v(" "),a("li",[a("code",[e._v("operations_stats.maree_categorie")])])]),e._v(" "),a("p",[a("strong",[e._v("Commit")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/d26d698900a92dc4e7aed3f1ec5faf942317b910")])]),e._v(" "),a("h3",{attrs:{id:"_2018-10-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-10-10","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-10-10")]),e._v(" "),a("p",[e._v("La durée d'engagement des différents moyens est comptabilisée en heures en plus des minutes dans "),a("code",[e._v("operations_stats")]),e._v(".")]),e._v(" "),a("p",[e._v("Ajout des colonnes suivantes :")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("operations_stats.duree_engagement_moyens_nautiques_heures")])]),e._v(" "),a("li",[a("code",[e._v("operations_stats.duree_engagement_moyens_terrestres_heures")])]),e._v(" "),a("li",[a("code",[e._v("operations_stats.duree_engagement_moyens_aeriens_heures")])])]),e._v(" "),a("p",[a("strong",[e._v("Commit")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/57c1d80d20694715afaf84f5641aaab294693a5d")])]),e._v(" "),a("h3",{attrs:{id:"_2018-10-06"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-10-06","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-10-06")]),e._v(" "),a("ul",[a("li",[e._v("Ajout d'une colonne "),a("code",[e._v("operations_stats.est_vacances_scolaires")]),e._v(" qui indique si l'opération se déroule pendant les vacances scolaires de la zone A, B ou C")]),e._v(" "),a("li",[e._v("La plaisance légère est désormais catégorisée comme un loisir nautique (préalablement plaisance)")])]),e._v(" "),a("p",[a("strong",[e._v("Commits")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/f35d711ca32aca127db3961f2fe1ceb91e16d98e")]),e._v(" "),a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/c6e1574f4f0ac0d1b46970d2e96e4ca776636e0d")])]),e._v(" "),a("h3",{attrs:{id:"_2018-10-03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-10-03","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-10-03")]),e._v(" "),a("ul",[a("li",[e._v("La colonne "),a("code",[e._v("operations_stats.numero_semaine")]),e._v(" a été renommée en "),a("code",[e._v("operations_stats.annee_semaine")]),e._v(". Elle contient l'année et la semaine, par exemple "),a("code",[e._v("2018-10")])]),e._v(" "),a("li",[e._v("La colonne "),a("code",[e._v("operation_stats.semaine")]),e._v(" a été ajoutée. Elle contient uniquement le numéro de la semaine, par exemple "),a("code",[e._v("10")])])]),e._v(" "),a("p",[a("strong",[e._v("Commits")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/e85941f836d6a718d1164a36afd119cde8b374e3")])]),e._v(" "),a("h3",{attrs:{id:"_2018-09-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-09-18","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-09-18")]),e._v(" "),a("ul",[a("li",[e._v("Correction des fuseaux horaires pour les CROSS de Nouvelle-Calédonie et Polynésie")]),e._v(" "),a("li",[e._v("La colonne "),a("code",[e._v("operations.numero_sitrep")]),e._v(" est désormais renseignée pour les opérations avant 2010")]),e._v(" "),a("li",[e._v("Ajout des colonnes "),a("code",[e._v("operations_stats.nombre_personnes_blessees")]),e._v(" et "),a("code",[e._v("operations_stats.nombre_personnes_blessees_sans_clandestins")]),e._v(" dénombrant le nombre de personnes blessées dans chaque opération")]),e._v(" "),a("li",[e._v("Ajout de la colonne "),a("code",[e._v("operations.vent_direction_categorie")]),e._v(" indiquant la direction du vent (par exemple : "),a("code",[e._v("nord-ouest")]),e._v(")")])]),e._v(" "),a("p",[a("strong",[e._v("Commits")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/ee04005d8778bcbf2e1566ad5b6010980e5b0dfd")]),e._v(" "),a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/9a3a271188a0001e69b18f617e862e1f5ff91465")]),e._v(" "),a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/3d4d21a244c36979cee300ee70782e4982e9c919")]),e._v(" "),a("li",[e._v("https://github.com/entrepreneur-interet-general/predisauvetage/commit/a158bbcc2ca8da0f9c043de3938667216264045d")])]),e._v(" "),a("h3",{attrs:{id:"_2018-08-23"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-08-23","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-08-23")]),e._v(" "),a("p",[e._v("Les fichiers CSV sont désormés triés dans l'ordre croissant selon la valeur de la colonne "),a("code",[e._v("operation_id")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Commit")]),e._v(":\nhttps://github.com/entrepreneur-interet-general/predisauvetage/commit/699d48987f95fc05892f8fdd8d63e42320d677d9")]),e._v(" "),a("h3",{attrs:{id:"_2018-08-08"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-08-08","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-08-08")]),e._v(" "),a("p",[e._v("Table "),a("code",[e._v("operations_stats")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("ajout de la colonne "),a("code",[e._v("est_dans_stm")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("nom_stm")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("est_dans_dst")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("nom_dst")])])]),e._v(" "),a("p",[a("strong",[e._v("Commit")]),e._v(":\nhttps://github.com/entrepreneur-interet-general/predisauvetage/commit/765dfdbebedbac642a0eacd6017312b2803fa5db")]),e._v(" "),a("h3",{attrs:{id:"_2018-07-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-07-22","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-07-22")]),e._v(" "),a("p",[e._v("Table "),a("code",[e._v("operations_stats")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("ajout de la colonne "),a("code",[e._v("distance_cote_metres")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("distance_cote_milles_nautiques")])])]),e._v(" "),a("p",[a("strong",[e._v("Pull request")]),e._v(":\nhttps://github.com/entrepreneur-interet-general/predisauvetage/pull/42")]),e._v(" "),a("h3",{attrs:{id:"_2018-07-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-07-10","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-07-10")]),e._v(" "),a("p",[e._v("Table "),a("code",[e._v("operations_stats")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("ajout de la colonne "),a("code",[e._v("date")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("jour_semaine")])])]),e._v(" "),a("p",[a("strong",[e._v("Pull request")]),e._v(":\nhttps://github.com/entrepreneur-interet-general/predisauvetage/pull/40")]),e._v(" "),a("h3",{attrs:{id:"_2018-07-09"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-07-09","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-07-09")]),e._v(" "),a("p",[e._v("Table "),a("code",[e._v("operations_stats")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("ajout de la colonne "),a("code",[e._v("est_jour_ferie")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("est_weekend")])]),e._v(" "),a("li",[e._v("ajout de la colonne "),a("code",[e._v("jour_semaine")])]),e._v(" "),a("li",[e._v("la colonne "),a("code",[e._v("annee")]),e._v(" utilise la date de l'alerte en heure locale du CROSS coordinateur et non l'heure UTC")]),e._v(" "),a("li",[e._v("la colonne "),a("code",[e._v("mois")]),e._v(" utilise la date de l'alerte en heure locale du CROSS coordinateur et non l'heure UTC")]),e._v(" "),a("li",[e._v("la colonne "),a("code",[e._v("jour")]),e._v(" utilise la date de l'alerte en heure locale du CROSS coordinateur et non l'heure UTC")])]),e._v(" "),a("p",[a("strong",[e._v("Pull request")]),e._v(":\nhttps://github.com/entrepreneur-interet-general/predisauvetage/pull/38")]),e._v(" "),a("h3",{attrs:{id:"_2018-07-02"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2018-07-02","aria-hidden":"true"}},[e._v("#")]),e._v(" 2018-07-02")]),e._v(" "),a("p",[e._v("Publication initiale")])])}],!1,null,null,null);s.options.__file="CHANGELOG.md";t.default=s.exports}}]);
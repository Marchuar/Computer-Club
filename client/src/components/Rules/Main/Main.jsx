import classes from './Main.module.css'

function Main({ scroll }) {
	return (
		<main
			className={scroll > 250 ? classes.main__page_fixed : classes.main__page}
		>
			<section className={classes.main__section}>
				<div className={classes.main__container}>
					<div className={classes.main__container}>
						<div className={classes.main__heading}>
							<h1 className={classes.main__heading_title}>
								Regeln für den Besuch des Computerclubs GamingGladius
							</h1>
						</div>
					</div>

					<div className={classes.main__text}>
						<div className={classes.main__rules_pre}>
							Wir hoffen, dass Sie alle Regeln unseres Clubs verstehen.{' '}
							<br></br>
							Durch Ihren Besuch in unserem Club stimmen Sie automatisch den
							Clubregeln zu.
						</div>

						<ol>
							<li>
								GamingGladius - ist nicht nur ein Computerclub, sondern eine
								echte Spielergemeinschaft, in der Respekt und gegenseitiges
								Verständnis von grundlegender Bedeutung sind. Beleidigungen und
								Diskriminierungen anderer sowie die Verwendung obszöner Sprache
								und aggressives Verhalten sind nicht gestattet.
							</li>
							<li>
								Wir sind gegen Alkohol, Rauchen und andere schlechte
								Gewohnheiten. Spieler, die betrunken sind, unter Drogeneinfluss
								stehen, schmutzige Kleidung tragen oder einen Geruch verbreiten,
								werden nicht bedient und aus dem Club verwiesen.
							</li>
							<li>
								Der Einsatz von Schadsoftware, Cheat-Codes und betrügerischen
								Programmen, die dem Club und seinen Besuchern Schaden zufügen
								könnten, ist nicht gestattet.
							</li>
							<li>
								Im Computerclub und in der Umgebung ist das Wegwerfen von Müll
								verboten.
							</li>
							<li>
								Die Clubverwaltung ist nicht für die Sicherheit Ihres Eigentums
								verantwortlich. Seien Sie also vorsichtig und lassen Sie es
								nicht unbeaufsichtigt!
							</li>
							<li>
								Der Administrator ist verpflichtet, dem Kunden bei technischen
								Problemen Hilfe zu leisten. Der Administrator ist nicht
								verpflichtet, dem Kunden den Umgang mit einem Computer sowie den
								Umgang mit bestimmten Programmen und Spielen beizubringen.
							</li>
							<li>
								Im Club ist außerdem Folgendes verboten:
								<ul>
									<li>
										* mühsam auf einem Stuhl schwingen, auf einem Stuhl durch
										die Spielhalle fahren;&nbsp;
									</li>
									<li>
										* Cracker, Chips und andere krümelige Lebensmittel im
										Spielbereich essen;
									</li>
									<li>
										* im Computerraum des Clubs schlafen oder bleiben, ohne für
										die Arbeitszeit am Computer zu bezahlen;
									</li>
									<li>
										* auf dem Gelände des Clubs Zigaretten und IQOS rauchen;
									</li>
									<li>
										* sich im Zustand einer Alkohol- oder Drogenvergiftung auf
										dem Clubgelände aufhalten;
									</li>
									<li>* obszöne Sprache im Club verwenden;</li>
									<li>* Müll im Verein und in der Umgebung;</li>
									<li>
										* Respektlosigkeit gegenüber den Mitarbeitern oder Besuchern
										des Clubs zeigen;
									</li>
									<li>
										* dem Club materiellen Schaden zufügen (einschließlich
										vorsätzlicher Beschädigung der Software);
									</li>
									<li>
										* Bewegen Sie den Monitor und die Systemeinheit
										selbstständig, trennen Sie die Komponenten des Computers und
										des Netzwerks, berühren Sie die Elemente des Stromnetzes,
										die Computer und Netzwerkgeräte mit Strom versorgen;
									</li>
									<li>
										* Es ist verboten, sich ohne Bezahlung der Spielzeit im Club
										aufzuhalten und anderen Spielern Störungen und
										Unannehmlichkeiten zu bereiten.
									</li>
								</ul>
							</li>
							<li>
								Wenn dem Verein durch die Handlungen des Spielers ein
								materieller Schaden entstanden ist, ist es erforderlich, diesen
								Schaden vollständig zu ersetzen:
								<ul>
									<li>Fernseher - 1.000 Euro;</li>
									<li>Spieltisch - 200 Euro;</li>
									<li>Stuhl - 500 Euro;</li>
									<li>Kopfhörer - 150 Euro;</li>
									<li>Monitor - 500 Euro;</li>
									<li>Maus - 80 Euro;</li>
									<li>Tastatur - 150 Euro;</li>
									<li>Nachschubterminal – von 1.000 bis 3.000 Euro;</li>
									<li>Spielmatte - 20 Euro.</li>
									<li>
										*Die Kosten für andere Ausrüstung, die nicht in Abschnitt 8
										dieser Regeln aufgeführt ist, können mit der Verwaltung
										geklärt werden.
									</li>
								</ul>
							</li>
							<li>
								Die Clubverwaltung hat das Recht, einen Spieler ohne
								Rückerstattung aus dem Club zu entfernen, wenn gegen die Regeln
								verstoßen wird.
							</li>
							<li>
								{' '}
								Der Computerclub „GamingGladius“ ist eine private Einrichtung,
								daher hat die Verwaltung das Recht, jedem Kunden den Besuch des
								Clubs ohne Angabe von Gründen zu verweigern;
							</li>
							<li>
								Der Besucher hat das Recht, Informationen über die Belegung der
								Computer im Raum und die Aussichten auf deren Freigabe zu
								erhalten.
							</li>
							<li>
								Im Falle einer Gerätestörung hat der Besucher das Recht, vom
								Administrator technische Hilfe zu verlangen oder den Computer
								durch&nbsp; einen funktionierenden zu ersetzen.
							</li>
						</ol>

						<p align='center' className={classes.rules__first_p}>
							Für eine langfristige und fruchtbare Zusammenarbeit bitten wir
							Sie, diese Regeln des GamingGladius-Clubs zu beachten.
						</p>

						<p align='center'>Danke für dein Verständnis.</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main

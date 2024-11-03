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
							<h1 className={classes.main__heading_title}>Preise</h1>
						</div>
					</div>

					<div className={classes.main__text}>
						<p className={classes.main__text_p}>
							&nbsp;&nbsp;&nbsp;Für einen erfahrenen Spieler, der einen
							Computerclub sucht, können die Preise sehr wichtig sein, da
							Wettbewerbe im E-Sport mehr als einen Tag dauern können. Deshalb
							haben wir bei GamingGladius einen Mindeststundensatz festgelegt,
							der für jeden erschwinglich ist. Sie können zwischen
							Stundenpreisen oder, noch besser, einem Komplettpaket wählen, dann
							ist der Preis für die Miete eines Gaming-PCs pro Stunde am
							niedrigsten.
						</p>
						<br></br>
						<p className={classes.main__text_p}>
							&nbsp;&nbsp;&nbsp;Angesichts der leistungsstärksten und modernsten
							Maschinen und hochwertigen Gaming-Stühlen führender Hersteller
							erscheinen die Kosten für den Besuch eines Gaming-Clubs
							lächerlich. Darüber hinaus werden Sie für dieses Geld ein fester
							Bestandteil des eSports-Teams.
						</p>
						<br></br>
						<p className={classes.main__text_p}>
							&nbsp;&nbsp;&nbsp;Unsere Preise eignen sich für alle Kategorien
							von eSport-Spielern, die lieber zu unterschiedlichen Tageszeiten
							spielen. In diesem Fall ist es besser, dem Paket „Für einen Tag“
							den Vorzug zu geben. In diesem Fall haben Sie keinerlei
							Einschränkungen im Spiel und können viel Geld sparen.
						</p>
					</div>

					<div className={classes.main__cost}>
						<div className={classes.cost__table}>
							<div className={classes.cost__table_block}>
								<table className={classes.table}>
									<thead className={classes.table__thead}>
										<tr>
											<th>PC-Verleih</th>
											<th>Zeit</th>
											<th>Preisstandard</th>
											<th>VIP-Preis</th>
										</tr>
									</thead>
									<tbody className={classes.table__tbody}>
										<tr id='bx_3218110189_195955'>
											<td>
												<span>Stundensatz</span>
											</td>
											<td>
												<span>Montag - Freitag von 14:00 bis 5:00 Uhr</span>
											</td>
											<td>
												<span>2,99 Euro</span>
											</td>

											<td>
												<span>4,49 Euro</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195956'>
											<td>
												<span>Stundensatz (Wochenenden)</span>
											</td>
											<td>
												<span>Samstag - Sonntag von 14:00 bis 17:00 Uhr</span>
											</td>

											<td>
												<span>3,49 Euro</span>
											</td>

											<td>
												<span>4,99 Euro</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195957'>
											<td>
												<span>Stundensatz „Morgen“</span>
											</td>
											<td>
												<span>Montag - Freitag 05:00 bis 14:00 Uhr</span>
											</td>

											<td>
												<span>2,49 Euro</span>
											</td>

											<td>
												<span>3,99 Euro</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195958'>
											<td>
												<span>Stundensatz „Morgens (Wochenende)“</span>
											</td>
											<td>
												<span>Samstag - Sonntag von 05:00 bis 14:00 Uhr</span>
											</td>

											<td>
												<span>2,99 Euro</span>
											</td>

											<td>
												<span>4,19 Euro</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195959'>
											<td>
												<span>Paket „Übernachtung“</span>
											</td>
											<td>
												<span>Montag - Freitag von 22:00 bis 08:00 Uhr</span>
											</td>

											<td>
												<span>14,99 Euro</span>
											</td>

											<td>
												<span>16,99 Euro</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195960'>
											<td>
												<span>Paket „Übernachtung (Wochenende)“</span>
											</td>
											<td>
												<span>Samstag - Sonntag von 22:00 bis 08:00 Uhr</span>
											</td>

											<td>
												<span>15,99 Euro</span>
											</td>

											<td>
												<span>17,99 Euro</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main

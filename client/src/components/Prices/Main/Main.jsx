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
							<h1 className={classes.main__heading_title}>Цены</h1>
						</div>
					</div>

					<div className={classes.main__text}>
						<p className={classes.main__text_p}>
							&nbsp;&nbsp;&nbsp;Для опытного геймера, который ищет компьютерный
							клуб в Москве, цены бывают очень важны, ведь в киберспорте
							соревнования могут длиться более суток. Поэтому в Cyberloga мы
							установили минимальную стоимость часа, доступную каждому. Вы
							можете выбрать почасовую тарификацию, а лучше – полный пакет,
							тогда цена аренды игрового ПК за час будет самой низкой.
						</p>
						<br></br>
						<p className={classes.main__text_p}>
							&nbsp;&nbsp;&nbsp;Учитывая мощнейшие и ультрасовременные машины,
							высококачественные геймерские кресла от ведущих производителей,
							стоимость посещения игрового клуба в Москве кажется смехотворной.
							Более того, за эти деньги Вы становитесь неотъемлемой частью
							киберспортивной команды.
						</p>
						<br></br>
						<p className={classes.main__text_p}>
							&nbsp;&nbsp;&nbsp;Наши цены подойдут всем категориям
							киберспортсменов, которые предпочитают играть в разное время
							суток. При этом лучше отдать предпочтение пакету «На сутки». В
							таком случае у Вас не будет абсолютно никаких ограничений в игре,
							и Вы сможете неплохо сэкономить.
						</p>
					</div>

					<div className={classes.main__cost}>
						<div className={classes.cost__table}>
							<div className={classes.cost__table_block}>
								<table className={classes.table}>
									<thead className={classes.table__thead}>
										<tr>
											<th>Аренда игровой машины!</th>
											<th>Время</th>
											<th>Цена Light</th>
											<th>Цена Стандарт</th>
											<th>Цена VIP</th>
										</tr>
									</thead>
									<tbody className={classes.table__tbody}>
										<tr id='bx_3218110189_195955'>
											<td>
												<span>Часовой тариф</span>
											</td>
											<td>
												<span>Понедельник - Четверг с 14:00 до 5:00</span>
											</td>
											<td>
												<span>59 р.</span>
											</td>

											<td>
												<span>79 р.</span>
											</td>

											<td>
												<span>89 р.</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195956'>
											<td>
												<span>Часовой тариф (выходные)</span>
											</td>
											<td>
												<span>Пятница - Воскресенье с 14:00 до 5:00</span>
											</td>
											<td>
												<span>69 р.</span>
											</td>

											<td>
												<span>89 р.</span>
											</td>

											<td>
												<span>99 р.</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195957'>
											<td>
												<span>Часовой тариф "Утро"</span>
											</td>
											<td>
												<span>Понедельник - Пятница 05:00 до 14:00</span>
											</td>
											<td>
												<span>49 р.</span>
											</td>

											<td>
												<span>59 р.</span>
											</td>

											<td>
												<span>69 р.</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195958'>
											<td>
												<span>Часовой тариф "Утро (выходные)"</span>
											</td>
											<td>
												<span>Суббота - Воскресенье с 05:00 до 14:00</span>
											</td>
											<td>
												<span>49 р.</span>
											</td>

											<td>
												<span>59 р.</span>
											</td>

											<td>
												<span>69 р.</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195959'>
											<td>
												<span>Пакет "Ночевка"</span>
											</td>
											<td>
												<span>Понедельник - Пятница с 22:00 до 08:00</span>
											</td>
											<td>
												<span>349 р.</span>
											</td>

											<td>
												<span>399 р.</span>
											</td>

											<td>
												<span>499 р.</span>
											</td>
										</tr>
										<tr id='bx_3218110189_195960'>
											<td>
												<span>Пакет "Ночевка (выходные)"</span>
											</td>
											<td>
												<span>Суббота - Воскресенье с 22:00 до 08:00</span>
											</td>
											<td>
												<span>399 р.</span>
											</td>

											<td>
												<span>449 р.</span>
											</td>

											<td>
												<span>549 р.</span>
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

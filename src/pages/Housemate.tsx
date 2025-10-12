interface HousemateInfo {
	name: string
	startDate: string
	endDate: string
}

function Housemate(): JSX.Element {
	const getCurrentHousemateInfo = (): HousemateInfo => {
		const housemates = ['Rodo', 'Alan', 'Jose']
		const startDate = new Date('2025-09-01')
		const currentDate = new Date()

		const timeDiff = currentDate.getTime() - startDate.getTime()
		const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
		const weekNumber = Math.floor(daysDiff / 7)

		const weekStartDate = new Date(startDate)
		weekStartDate.setDate(startDate.getDate() + weekNumber * 7)

		const weekEndDate = new Date(weekStartDate)
		weekEndDate.setDate(weekStartDate.getDate() + 6)

		const formatDate = (date: Date): string => {
			return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
		}

		return {
			name: housemates[weekNumber % housemates.length],
			startDate: formatDate(weekStartDate),
			endDate: formatDate(weekEndDate)
		}
	}

	const currentHousemate = getCurrentHousemateInfo()

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-2xl font-bold mb-1">This week is {currentHousemate.name} </h1>
			<p className="font-normal mb-6">
				({currentHousemate.startDate} - {currentHousemate.endDate})
			</p>

			<div className="space-y-3">
				<h2 className="text-lg font-semibold mb-3">Tasks:</h2>
				<div className="space-y-2">
					<label className="flex items-center space-x-2">
						<input type="checkbox" className="checkbox" />
						<span>Take out the garbage when it's full</span>
					</label>
					<label className="flex items-center space-x-2">
						<input type="checkbox" className="checkbox" />
						<span>Sweep the floor</span>
					</label>
					<label className="flex items-center space-x-2">
						<input type="checkbox" className="checkbox" />
						<span>Mop the floor</span>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Housemate

export const getPrice = (duration) => {
  //Variables for each duration cost
  const minuteCost = 2
  const hourCost = 22
  const dayCost = 60
  const weekCost = 105

  // Varaibles for durations
  const hour = 60
  const day = 1440
  const week = 10080

  let time = duration
  const costs = []

  //While loop that excutes conditions until 'time' variable is 0,
  //Each condition, if true, pushes a cost to 'costs' array and substracts cost related time from 'time' variable
  // - first condition to checks if duration is under 12 minutes --> per minute cost
  // - second condition checks if duration is under 129 minutes but more than or same as 12 minutes --> per hour cost
  // - third condition checks if duration is under 1561 minutes but more than or same as 129 minutes --> per day cost
  // - fourth condition checks if duration is more than 1561 --> per week cost
  while (time > 0) {

    if (time >= 1 && time < 12) {
      costs.push(time * minuteCost)
      time = 0
    } else if (time >= 12 && time < 129) {
      costs.push(hourCost)
      time < hour ? time = 0 : time -= hour
    } else if (time >= 129 && time < 1561) {
      costs.push(dayCost)
      time < day ? time = 0 : time -= day
    } else if (time >= 1561) {
      costs.push(weekCost)
      time < week ? time = 0 : time -= week
    }

  }
  const totalCost = costs.reduce((a, b) => a + b, 0) //adds all values of 'costs' array together as value for total cost

  return totalCost
}
import { getPrice } from './getPrice'

describe('getPrice', () => {
  test('should return correct price for one week', () => {
    const price = getPrice(10080)

    expect(price).toEqual(105)
  })

  test('should return correct price for one day', () => {
    const price = getPrice(1440)

    expect(price).toEqual(60)
  })

  test('should return correct price for one hour', () => {
    const price = getPrice(60)

    expect(price).toEqual(22)
  })

  test('should return correct price for 15 minutes', () => {
    const price = getPrice(15)

    expect(price).toEqual(22)
  })

  test('should return correct price for 2 hours 9 minutes', () => {
    const price = getPrice(129)

    expect(price).toEqual(60)
  })

  test('should return correct price for 1 day 2 hours 1 minute', () => {
    const price = getPrice(1561)

    expect(price).toEqual(105)
  })

  test('should return correct price for 2 weeks 1 hours 6 minutes', () => {
    const price = getPrice(20226)

    expect(price).toEqual(244)
  })

  test('should return correct price for 2 weeks', () => {
    const price = getPrice(20160)

    expect(price).toEqual(210)
  })

  // test('should return correct price for ', () => {
  //   const price = getPrice()

  //   expect(price).toEqual()
  // })
})
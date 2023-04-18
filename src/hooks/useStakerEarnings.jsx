import { sum } from 'lodash'
import { useEffect, useState } from 'react'
import { voltStakeHolderSubgraphClient } from '../graphql/client'
import { GET_VOLT_STAKER_EARNING } from '../graphql/queries'

export const useStakerEarnings = () => {
  const [earnings, setEarnings] = useState(-1)
  useEffect(() => {
    ;(async () => {
      const previousSevenDays = new Array(7).fill().map((_, index) => {
        let date = new Date()
        return Math.floor(date.setDate(date.getDate() - index) / 8.64e7) + ''
      })
      let results = await Promise.all(
        previousSevenDays.map(async (day) => {
          return await voltStakeHolderSubgraphClient.query({
            query: GET_VOLT_STAKER_EARNING,
            variables: {
              id: day,
            },
          })
        })
      )
      let sumOfPreviousSevenDays = sum(
        results
          .map(({ data: { servingDayDatas } }) => {
            return servingDayDatas[0]?.voltServed || 0
          })
          .map((item) => Math.floor(parseFloat(item)))
      )
      console.log(sumOfPreviousSevenDays, 'sumOfPreviousSevenDays')
      setEarnings(sumOfPreviousSevenDays)
    })()
  }, [])
  console.log(earnings, 'earnings')
  return earnings
}

import React from 'react'
import { Pie } from 'react-chartjs-2'
import { pie_bg } from "../../constants/pie_bg"

const MyPie = ({ pieData }) => {
    return (
        <>
            <Pie className='mx-auto' data={{
                labels: pieData.labels,
                datasets: [{
                    label: 'Stock Distribution',
                    data: pieData.data,
                    backgroundColor: pie_bg.filter((ele, i) => {
                        if ((i + 1) <= pieData.data.length) return true
                        return false
                    }),
                    hoverOffset: 4
                }]
            }} options={{ maintainAspectRatio: false }} />
        </>
    )
}

export default MyPie
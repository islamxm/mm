import './StatInd.scss';
import { Row, Col } from 'antd';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Select } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  import { Line, Doughnut } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

const { Option } = Select;

const as = new authService();



const StatInd = () => {
    const {token} = useSelector(state => state);
    const [period, setPeriod] = useState('year');
    const [chartData, setChartData] = useState({})
    const [dgData, setDgData] = useState({})
    const [statData, setStatData] = useState([])

    
    useEffect(() => {
        // console.log(period)
        if(token && period) {
            as.getStat(token, period).then(res => {
                console.log(res)
                setChartData(res.graph_data)
                setDgData(res.percent_orders)
                setStatData(res.categoryes_stat)
            })
        }
    }, [token, period])

    const periodHandle = (value) => {
        setPeriod(value)
    }

    const options = {
        responsive: true,
        plugins: {
          legend: false
        //   title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        //   },
        },
      };

    const lineColor = (index) => {
        switch (index) {
            case 0: 
                return '#0D99E8'
            case 1: 
                return '#1BAF3C'
            case 2: 
                return '#8512CC'
            default:
                return '#0D99E8'
        }
    }

    const dgColor = (index) => {
        switch (index) {
            case 0:
                return '#3F86F1'
            case 1:
                return '#102D96'
            case 2: 
                return '#7000FF'
            case 3: 
                return '#0AC069'
            case 4:
                return '#F16A3F'
            case 5:
                return '#AFAFAF'
            case 6: 
                return '#2FBEEB'
            default:
                return '#3F86F1'
        }
    }

    useEffect(() => {
        console.log(dgData)
    }, [dgData])
    
    return (
        <div className="StatInd">
            <div className="StatInd__top">
                <Select
                    onChange={periodHandle}
                    value={period}
                >
                    <Option value={'year'}>За год</Option>
                    <Option value={'month'}>За месяц</Option>
                    <Option value={'week'}>За неделю</Option>
                    <Option value={'day'}>За день</Option>
                </Select>
            </div>
            <div className="StatInd__body">
                <Row gutter={[25, 0]}>
                    <Col span={18}>
                        <div className="StatInd__body_chart">
                            <div className="StatInd__body_chart_main">
                                {
                                    chartData && chartData.curve ? (
                                        <Line 
                                            options={options} 
                                            data={{
                                                labels: chartData?.times,
                                                datasets: chartData?.curve?.map((item, index) => {
                                                    return {
                                                        label: item.name,
                                                        data: item.data,
                                                        borderColor: lineColor(index)
                                                    }
                                                }),
                                                
                                            }}
                                            />
                                    ) : null
                                }
                                
                            </div>
                            <div className="StatInd__body_chart_stat">

                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="StatInd__body_dg">
                            {
                                dgData && dgData.orders && dgData.orders.length > 0 ? (
                                    <Doughnut options={{plugins: {legend: {position: 'bottom'}}}} data={{
                                        
                                        labels: dgData?.orders?.map(item => item.title),
                                        datasets: [
                                            {
                                                label: 'test',
                                                data: dgData?.orders?.map(item => item.percent),
                                                backgroundColor: dgData?.orders?.map((item, index) => dgColor(index))

                                            }
                                        ]
                                    }}/>
                                    
                                ) : null
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default StatInd;
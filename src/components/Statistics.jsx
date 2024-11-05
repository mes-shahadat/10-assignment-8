
import { useLoaderData } from "react-router-dom";
import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList
} from "recharts";


function Statistics() {

    const data = useLoaderData();

    return (
        <>
            <section className="bg-[#943fdd] text-white pb-3">

                <div className="w-11/12 mx-auto text-center space-y-4 py-8">
                    <h2 className="text-3xl font-bold">Statistics</h2>
                    <p className="max-w-[65ch] mx-auto text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

            </section>

            <div className="md:w-11/12 mx-auto mb-40">
                <h2 className="text-xl font-bold py-8">Statistics</h2>

                <ResponsiveContainer className="bg-white rounded-xl" width="100%" height={700}>

                    <ComposedChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" textAnchor="end" sclaeToFit="true" verticalAnchor="start" interval={0} angle="-60" height={300} />
                        <YAxis label={{ value: 'prices', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend layout="horizontal" verticalAlign="top" align="center" />
                        <Area type="monotone" dataKey="price" fill="#efe1fa" stroke="#efe1fa" />
                        <Bar dataKey="price" barSize={20} fill="#943fdd">
                            <LabelList dataKey="rating" position="top" />
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        </>
    )
}

export default Statistics;
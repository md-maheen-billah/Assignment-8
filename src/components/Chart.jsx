import { useEffect, useState } from "react";
import { getBooks } from "../utility/idex";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    pv: 2400,
    amt: 2400,
  },
  {
    pv: 1398,
    amt: 2210,
  },
  {
    pv: 9800,
    amt: 2290,
  },
  {
    pv: 3908,
    amt: 2000,
  },
  {
    pv: 4800,
    amt: 2181,
  },
  {
    pv: 3800,
    amt: 2500,
  },
  {
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
          Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const [readBooks, setReadBooks] = useState(null);
  useEffect(() => {
    const storedBooks = getBooks();
    setReadBooks(storedBooks);
  }, []);
  return (
    <div
      className="bg-[#f3f3f3] px-6 py-14 rounded-2xl lg:mt-8 mt-4"
      style={{ width: "100%", height: 500 }}
    >
      <ResponsiveContainer>
        <BarChart
          width={800}
          height={300}
          data={readBooks}
          margin={{
            top: 20,
            right: 30,
            left: -10,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

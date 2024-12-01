import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {
  const  mathMarksData = [
    { "id": 1, "name": "Alice", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 88 },
    { "id": 2, "name": "Bob", "mathMarks": 78, "physicsMarks": 84, "chemistryMarks": 76 },
    { "id": 3, "name": "Charlie", "mathMarks": 92, "physicsMarks": 89, "chemistryMarks": 95 },
    { "id": 4, "name": "Diana", "mathMarks": 88, "physicsMarks": 92, "chemistryMarks": 81 },
    { "id": 5, "name": "Ethan", "mathMarks": 74, "physicsMarks": 70, "chemistryMarks": 68 },
    { "id": 6, "name": "Fiona", "mathMarks": 91, "physicsMarks": 88, "chemistryMarks": 85 },
    { "id": 7, "name": "George", "mathMarks": 69, "physicsMarks": 72, "chemistryMarks": 75 },
    { "id": 8, "name": "Hannah", "mathMarks": 95, "physicsMarks": 94, "chemistryMarks": 90 },
    { "id": 9, "name": "Ivy", "mathMarks": 82, "physicsMarks": 80, "chemistryMarks": 84 },
    { "id": 10, "name": "Jack", "mathMarks": 87, "physicsMarks": 85, "chemistryMarks": 89 }
  ];
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line type='monotone' dataKey='mathMarks' stroke='red'></Line>
                <Line type='monotone' dataKey={'chemistryMarks'} stroke="#8884d8"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
export default function Statistic({courseResult}){
    const score = [];
    let avg = 0;
    courseResult.map((result=>(
        score.push(result.score))))
    score.map((sc)=>avg+=sc/score.length);
    return (
        <div class="statistic">
            <td class="card">
                <h2>Avg</h2>
                <div class="value">{avg.toFixed(2)}</div>
            </td>
            <td class="card">
                <h2>Min</h2>
                <div class="value">{Math.min(...score)}</div>
            </td>
            <td class="card">
                <h2>Max</h2>
                <div class="value">{Math.max(...score)}</div>
            </td>
        </div>
    );
}
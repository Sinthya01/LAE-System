export const GoalsTable = () => {
  return (
    <div className="goals scroll">
      <h1>Goals</h1>
      <table>
        <thead>
          <tr>
            <th>Section 1</th>
            <th>Section 2</th>
            <th>Section 3</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(20)].map((_, idx) => (
            <tr key={idx}>
              <td>Test</td>
              <td>Test</td>
              <td>Test</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

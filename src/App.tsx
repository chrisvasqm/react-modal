function App() {

  function handleSubmit() {
    alert("submitted");
  }

  return (
    <div>
      <h1>
        Modal app
      </h1>

      <form onSubmit={handleSubmit}>
        <button type="submit">Show modal</button>
      </form>
    </div>
  )
}

export default App;

const Sorting = ({onSortChange }) => {
  const sorting = ["Ratings", "Price High to Low", "Price Low to High", "A-Z", "Z-A"];

  const handleSort = (e) => {
    onSortChange(e.target.value);
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-end my-3">
        <select className="bg-white text-black rounded p-1 focus:outline-none focus:shadow-outline " onChange={handleSort}>
        <option value="">Sort By</option>
          {sorting.map((item, index) => (
            <option key={index} value={item} className="">{item}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Sorting;
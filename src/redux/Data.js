// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from "react-redux"
// // import { allData } from "../../redux/generalDataSlice"
// import axios from "../api/axios"

// const Data = () => {
//   const { allDatas, cates, categories } = useSelector((state) => state.generalData)
//   const [param, setParams] = useState(1)
//   const dispatch = useDispatch()
//   // const category = categories.map((data) => (data.name))

//   useEffect(() => {
//     switch (cates) {
//       case "tenetur": {
//         setParams(1)
//         break
//       }
//       case "laudantium": {
//         setParams(2)
//         break
//       }
//       case "placeat": {
//         setParams(3)
//         break
//       }
//       case "corrupti": {
//         setParams(4)
//         break
//       }
//       default: {
//         setParams(1)
//       }
//     }
//   }, [cates])

//   useEffect(() => {
//     axios.get(`/category/${param}/posts`)
//       .then((response) => dispatch(allData(response.data)))
//       .catch(err => {
//         throw Error(err)
//       })
//   }, [dispatch, param])
// }

// export default Data
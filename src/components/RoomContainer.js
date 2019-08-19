import React from "react";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../context";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import Loading from "../components/Loading";
// import { RoomConsumer } from "../context";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello From Rooms Container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

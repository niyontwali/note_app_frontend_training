import React from "react";
import Card from "../components/Card";
import { useGetNotesQuery } from "../redux/api/apiSlice";

const Home = () => {
  // RTK
  const { data: notes, isLoading, isError } = useGetNotesQuery();


  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl text-center font-bold pt-10">
          Notes
        </h1>
        <h3 className="text-lg text-white mb-6">All Notes({notes?.data?.length || 0})</h3>
        {/* our notes from backend */}
        <div className="flex flex-col gap-4">
          {isError && <div className="text-red-600 text-center">
            <small>Server errror</small>
          </div>}
          {isLoading && [1, 2, 3, 4].map((index) => (
            <div key={index} className="text-white bg-gray-700 px-6 py-4 rounded-lg animate-pulse">
              <div className="bg-gray-600 h-4 w-40 rounded-lg mb-2 animate-pulse" />
              <div className="bg-gray-600 h-4 w-60 rounded-lg animate-pulse" />
              <div className="bg-gray-600 h-4 w-60 rounded-lg ml-auto animate-pulse" />
            </div>
          ))}
          {notes?.data?.map((note) => (
            <Card
              key={note.id}
              title={note.title}
              content={note.content}
              createdAt={note.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

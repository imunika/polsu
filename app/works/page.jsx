'use client'
import Heading from "../components/Heading";
import Accordion from "../components/Accordion"
import records from '/src/records.json'

export default function EssaysPage() {
  const essayist = records.filter(item => item.title_essay.length > 0);
  return (
    <>
      <Heading>Works</Heading>
      <div className="grid grid-cols-4 bg-[rgb(253,249,249)] mb-6 pb-14">
        <div></div>
        <div className="md:col-span-2 col-span-4">
          <div className=" flex justify-center mt-4 p-1">
            <div className="list">
              {
                essayist.map((item, key) => (
                  <Accordion key={key} data={item}/>
                ))
              }
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
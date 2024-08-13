export default function Papertypes() {
    return (
      <div>
        <section>
          <div className="max-w-[80rem] w-full mx-auto px-4 my-10">
            <p className="text-center text-3xl md:text-5xl text-[#F45050] font-semibold my-10">
                PAPER TYPES
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-blue-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-[20px]">
                <ul className="list-disc list-inside text-[#3C486B] space-y-2">
                  <li>Energy access</li>
                  <li>Energy Issues & Security</li>
                  <li>Energy efficiency</li>
                  <li>Energy management</li>
                  <li>Energy policy</li>
                  <li>Clean energy technologies</li>
                  <li>Waste to Energy</li>
                  <li>Environmental sustainability</li>
                  <li>Electric vehicle</li>
                  <li>Ecology and Biodiversity Conservation</li>
                </ul>
              </div>
  
              {/* Card 2 */}
              <div className="bg-blue-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-[20px]">
                <ul className="list-disc list-inside text-[#3C486B] space-y-2">
                  <li>Energy Policy, Pollution, Planning & Management</li>
                  <li>Solid waste management</li>
                  <li>Air pollution, Waste Recycling/Management</li>
                  <li>Climate change and Global warming</li>
                  <li>Wastewater engineering and Treatment</li>
                  <li>Electric vehicle</li>
                  <li>Ecology and Biodiversity Conservation</li>
                  <li>Energy security and risk assessment</li>
                </ul>
              </div>
  
              {/* Card 3 */}
              <div className="bg-blue-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-[20px]">
                <ul className="list-disc list-inside text-[#3C486B] space-y-2">
                  <li>Environment impact assessment</li>
                  <li>Education for Sustainability</li>
                  <li>Sustainable cities</li>
                  <li>Behaviour on sustainability</li>
                  <li>Envisioning tomorrow sustainability</li>
                  <li>Sustainable and Renewable Fuels</li>
                  <li>Energy Management in Power Sector</li>
                </ul>
              </div>
  
            </div>
          </div>
        </section>
      </div>
    );
  }
  
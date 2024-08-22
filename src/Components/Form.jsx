import React,{useState} from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        weight: '',
        injury:'',
        goal:'',
        dietPref:'',
        curActivity:'',
        units: 'metric',
      });
    
      // Handler to update form data
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Handler to switch between metric and imperial units
      const toggleUnits = () => {
        setFormData((prevData) => ({
          ...prevData,
          units: prevData.units === 'metric' ? 'imperial' : 'metric',
          height: '',
          weight: '',
        }));
      };

      //function to submit basic user info
      const submitInfo =()=>{

      }
    
      // Convert height and weight to the appropriate unit
      const heightPlaceholder =
        formData.units === 'metric' ? 'cm' : 'inches';
      const weightPlaceholder =
        formData.units === 'metric' ? 'kg' : 'lbs';
      
    
      return (
        <div className="max-w-md mx-3 lg:mx-6 mt-28 my-10 p-8 bg-gray-100 bg-opacity-20 shadow-md">
          <h4 className="text-3xl font-bold text-white text-center mb-6">
            Discover the perfect diet and exercise plan to reach your peak
            fitness!
          </h4>

          <h4 className="text-sm font-light text-left mb-2">
            To give you the best possible insights, we just need a little info
            from you!
          </h4>

          <div className="mb-4 flex items-center ">
            <button
              onClick={toggleUnits}
              className="px-4 py-1 bg-opacity-40 bg-primary text-white text-md"
            >
              {formData.units === "metric" ? "Imperial" : "Metric"}
            </button>
            <h5 className="mx-2 text-sm font-light text-left">
              Click here to change measurement unit.
            </h5>
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2 mt-6">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder="Enter your age"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Height ({heightPlaceholder})
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder={`Enter your height in ${heightPlaceholder}`}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Weight ({weightPlaceholder})
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder={`Enter your weight in ${weightPlaceholder}`}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Diet Preference
            </label>
            <select
              name="dietPref"
              value={formData.dietPref}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 outline-none focus:outline-none rounded-lg bg-transparent"
            >
              <option value="" className="text-black text-sm"  disabled>
                Select your diet preference
              </option>
              <option className="text-black" value="Vegetarian">Vegetarian</option>
              <option className="text-black" value="Non-Vegetarian">Non-Vegetarian</option>
              <option className="text-black" value="Both">Both</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Allergies{" "}
            </label>
            <input
              type="text"
              name="injury"
              value={formData.allergy}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder="Do you have any allergies?"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Injuries/Limitations{" "}
            </label>
            <input
              type="text"
              name="injury"
              value={formData.injury}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder="Do you have any physical limitations?"
            />
          </div>

          <div className="mb-4">
  <label className="block text-lg mb-2 text-left px-2">Goals</label>
  <select
    name="goal"
    value={formData.goal}
    onChange={handleChange}
    className="w-full px-3 py-2 border-b-2 outline-none focus:outline-none rounded-lg bg-transparent"
  >
    <option value="" className="text-primary text-sm"  disabled>Select your fitness goal</option>
    <option className="text-black" value="Weight Loss">Weight Loss</option>
    <option className="text-black" value="Muscle Gain">Muscle Gain</option>
    <option className="text-black" value="Improved Endurance">Improved Endurance</option>
    <option className="text-black" value="Overall Fitness">Overall Fitness</option>
    <option className="text-black" value="Flexibility and Mobility">Flexibility and Mobility</option>
  </select>
</div>

         

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Current Activity Level
            </label>
            <select
              name="curActivity"
              value={formData.curActivity}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 outline-none focus:outline-none rounded-lg bg-transparent"
            >
              <option className="text-primary text-sm" value="" disabled>
                Select your activity level
              </option>
              <option
                className="text-black"
                value="Sedentary (little or no exercise)"
              >
                Sedentary (little or no exercise)
              </option>
              <option
                className="text-black"
                value="Lightly active (light exercise/sports 1-3 days/week)"
              >
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option
                className="text-black"
                value="Moderately active (moderate exercise/sports 3-5 days/week)"
              >
                Moderately active (moderate exercise/sports 3-5 days/week)
              </option>
              <option
                className="text-black"
                value="Very active (hard exercise/sports 6-7 days a week)"
              >
                Very active (hard exercise/sports 6-7 days a week)
              </option>
              <option
                className="text-black"
                value="Super active (very hard exercise/physical job & exercise 2x/day)"
              >
                Super active (very hard exercise/physical job & exercise 2x/day)
              </option>
            </select>
          </div>

          <div className="button flex justify-center my-5">
            <button
              onClick={submitInfo}
              className="px-6 py-2 bg-secondary hover:bg-opacity-70 shadow-lg active:shadow-sm text-xl rounded-md"
            >
              Submit
            </button>
          </div>

          <div className="bg-primary flex flex-col items-start rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Summary:</h3>
            <p>Name: {formData.name}</p>
            <p>Age: {formData.age}</p>
            <p>
              Height: {formData.height} {heightPlaceholder}
            </p>
            <p>
              Weight: {formData.weight} {weightPlaceholder}
            </p>
          </div>
        </div>
      );
};

export default Form;



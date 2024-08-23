import React,{useState,useEffect,useRef} from "react";
import axios from 'axios';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import html2pdf from 'html2pdf.js';
import '../App.css'
import { Link } from "react-router-dom";



const Form = () => {
    
    const contentRef = useRef(null)
   

const [downloadReady,setDownloadReady] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pdf, setPdf] = useState(false)
    const [error, setError] = useState('');

    const apikey = import.meta.env.VITE_OPENAI_API_KEY

    

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender:'',
        height: '',
        weight: '',
        allergy:'None',
        injury:'None',
        goal:'',
        dietPref:'Veg & Non-Veg',
        curActivity:'',
        units: 'metric',
      });
    
      
      const prompt = `Create a personalized workout and diet plan for a user with the following details:
  - Age: ${formData.age}
  - Gender: ${formData.gender}
  - Weight: ${formData.weight}
  - Height: ${formData.height}
  - Fitness Goals: ${formData.goal}
  - Diet Preference: ${formData.dietPref}
  - Current Activity Level: ${formData.curActivity}
  - Injuries: ${formData.injury}
  Please provide a 7 day workout plan, daily macro intake, daily calorie intake and create a meal plan.`;
      // Handler to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        return false;
      }
    }
    return true;
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

//   const fetchData = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const result = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-4o-mini',
//           messages: [
//             {
//               role: "system",
//               content: "You are a fitness expert capable of providing a tailored workout plan using only bodyweight and a variety of diet plan. Do not include any introductory statements or repeat information about the user profile. Be more considerate of the users injuries or allergies. If no information about the user is provided, kindly request in a sentence to provide the information."
//             },
//             { role: 'system', content: prompt }
//           ],
//           max_tokens: 100,
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${apikey}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setResponse(result.data.choices[0].message.content);

//     } catch (err) {
//       setError('An error occurred while fetching data.');
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (response) {
//       const htmlContent = marked(response);
//       const sanitizedHtml = DOMPurify.sanitize(htmlContent);
//       setFormattedResponse(
//         <div ref={pdfRef} style={{ display: 'flex' }}>
//           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
//         </div>
//       );
//     }
//   }, [response]);

//   useEffect(() => {
//     if (formattedResponse && pdfRef.current) {
//       // Ensure that content is rendered before generating the PDF
//       requestAnimationFrame(() => {
        
//         const options = {
//           margin: [10, 10, 10, 10],
//           filename: 'workout-and-diet-plan.pdf',
//           image: { type: 'jpeg', quality: 0.98 },
//           html2canvas: { scale: 2 },
//           jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//         };

//         html2pdf()
//           .from(pdfRef.current)
//           .set(options)
//           .toPdf()
//           .get('pdf')
//           .then((pdf) => {
//             pdf.save();
//           })
//           .catch((err) => {
//             console.error('Error generating PDF: ', err);
//           });
//       });
//     }
//   }, [formattedResponse]);

  
const handleSubmit = async () => {
    if (!validateForm()) {
      setError("Please provide your age, gender, weight, height, fitness goals, current activity level, and any dietary restrictions or preferences.");
      return;
    }


    setLoading(true);
    setError('');
    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:"You're a fitness expert creating a personalized workout and diet plan for a user based on the following information: age, gender, fitness goal, current fitness level, dietary preferences,injuries and allergies. Generate the following: Introduction: Start with a friendly introduction that acknowledges the user's goals and explains how this customized plan will help them achieve those goals.Workout Plan: Provide a detailed workout plan for the first week, including specific exercises, sets, reps, and rest periods(All exercises are done using body weight). Ensure the plan is tailored to their fitness level and goals (e.g., weight loss, muscle gain, endurance).Diet Plan: Create a day-by-day diet plan for the first week, including meals and snacks. Ensure it aligns with their dietary preferences and supports their fitness goals.Make sure the tone is supportive and motivational, and the instructions are clear and actionable.",
            },
            { role: "user", content: prompt },
          ],
          max_tokens: 1500,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const responseText = result.data.choices[0].message.content;
      const htmlContent = marked(responseText);
      const sanitizedHtml = DOMPurify.sanitize(htmlContent);

      // Set the content of the ref element
      contentRef.current.innerHTML  = `<div style="dislpay:flex,flex-direction:column,justify-content:center,width:100%;"><h1 style="margin-bottom:20px;color:#34E89E" >RawFlex Calisthenics</h1> ${sanitizedHtml}</div> `

      // Generate PDF from the ref element
      
       generatePDF();
       setDownloadReady(true)

    } catch (err) {
      setError('An error occurred while fetching data.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = () => {

   
    const element = contentRef.current;
    console.log(element)

    const options = {
      margin: [11, 11, 11, 11],
      filename: 'workout-and-diet-plan.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

      // Convert height and weight to the appropriate unit
      const heightPlaceholder =
        formData.units === 'metric' ? 'cm' : 'inches';
      const weightPlaceholder =
        formData.units === 'metric' ? 'kg' : 'lbs';
      
    
      return (
        <div className="main lg:w-full w-screen flex flex-col lg:flex-row justify-evenly">
        <div style={{scrollbarWidth:'none'}} className="max-w-lg mx-3 lg:mx-6 lg:w-2/6 mt-28 my-10 p-8 h-screen overflow-y-scroll bg-gray-100 bg-opacity-20 shadow-md">
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
            <label className="block text-lg mb-2 text-left px-2">Gender*</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder="Enter your gender"
           required />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">Age*</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder="Enter your age" required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Height ({heightPlaceholder})*
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder={`Enter your height in ${heightPlaceholder}`} required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Weight ({weightPlaceholder})*
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2  outline-none focus:outline-none rounded-lg bg-transparent"
              placeholder={`Enter your weight in ${weightPlaceholder}`} required
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
              <option className="text-black" value="Veg & Non-Veg">Veg & Non-Veg</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-left px-2">
              Allergies{" "}
            </label>
            <input
              type="text"
              name="allergy"
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

          <div className="button flex justify-between items-center my-5">
          <Link to="https://pmny.in/krnqjtlSdJST" > <button
              
              className="px-6 py-2 bg-secondary hover:bg-opacity-70 shadow-lg active:shadow-sm text-xl rounded-md"
            >
    {loading ? 'Loading...' : <h4>Pay & Download</h4>}
</button></Link>

            {/* <div>
      <a
        href="https://test.payumoney.com/url/uIhLlIFCHEzk"
        style={{
          width: '150px',
          backgroundColor: '#1CA953',
          textAlign: 'center',
          fontWeight: 800,
          padding: '11px 0px',
          color: 'white',
          fontSize: '12px',
          display: 'inline-block',
          textDecoration: 'none',
          borderRadius: '3.229px',
        }}
      >
        Buy Now
      </a>
    </div> */}
     <div className="flex flex-col items-center shadow-lg px-5 lg:px-10 py-1 rounded-lg">
        <span className="text-sm line-through text-gray-300">MRP: ₹299</span>
        <span className="text-5xl font-light text-white font-mono "><em className="text-lg">Rs.</em>99</span>
      </div>
          </div>
{/* {formattedResponse && <div className="w-full text-left my-5 ">{formattedResponse}</div>} */}
{error ? <div className="w-full text-left my-5 " >{error}</div>:null}


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

        <div ref={contentRef} style={{scrollbarWidth:"none"}} className="block max-w-lg lg:max-w-3xl mx-3 text-black text-left lg:mt-28 lg:mx-10  lg:w-full  rounded-xl my-8 bg-white p-6 lg:p-12" >{downloadReady ? <div></div>: <div className="flex flex-col w-full h-full justify-center  items-center">
            <h3 className="max-w-md text-center font-bold text-secondary ">You can view your report here and a PDF will be available for download!</h3> 
            <p className="text-black p-6">We charge Rs. 99 for generating your personalized workout and meal plan to cover the costs of maintaining
                 and improving our platform. This fee ensures you receive accurate, expert-reviewed recommendations,
                 helping us keep our service reliable and valuable for your fitness journey.</p></div>}</div>


        </div>
      );
};

export default Form;



import "./CurrencyOption.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const CurrencyOption = () => {
    const currency =[
        {value: "USD", label : "USD"},
        {value: "EUR", label : "EUR"},
        {value: "GBP", label : "GBP"},
        {value: "INR", label : "INR"},
        {value: "JPY", label : "JPY"},
    ];

    const customStyles = {

          control: (styles) => ({...styles,
            backgroundColor: 'none',
            color: '#f3f3f3',
            border: 'none',
            outline: 'none',
           
          }),
    }



  return (
    <div className="CurrencyOption">
      <span>|</span>

      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={currency[0]}
        options={currency}
        styles={customStyles} 

      />

    </div>
  );
};

export default CurrencyOption;

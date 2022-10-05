import './CategoryAccordion.scss';

const CategoryAccordion = (props) => {
    const accordion = [
        {
            title: 'Morning Tea',
            content : ['Green','Herbal','Loose','Mate','Organic']
        },
        {
            title: 'Tea Trends',
            content : ['Green','Herbal','Loose','Mate','Organic']
        }
        
    ]

  return (
    <div className="CategoryAccordion">
        <div className="CategoryAccordion__title">
          <p>{props.title}</p>
        </div>
        <div className="CategoryAccordion__content">
            <ul>
                <li>{props.content}</li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryAccordion
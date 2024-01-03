import classes from './OtherProducts.module.css'
import LinkButton from '../ui/LinkButton'

import { products } from '/public/data/data.js'

export default function OtherProducts({ without }) {
  let dataToShow = []
  let uniqueIds = new Set([])

  const data = products.filter((product) => product.id !== without)

  while (uniqueIds.size < 3) {
    uniqueIds.add(Math.floor(Math.random() * data.length))
  }

  uniqueIds.forEach((id) => dataToShow.push(data[id]))

  if (dataToShow)
    return (
      <div className={classes.wrapper}>
        <h2 className={classes.title}>YOU MAY ALSO LIKE</h2>
        <div className={classes.content}>
          {dataToShow.map((el, index) => {
            return (
              <div key={index} className={classes.content__card}>
                <img
                  className={classes.content__image}
                  src={el.mainImage}
                  alt={el.name}
                />
                <h3>{el.name}</h3>
                <LinkButton linkTo={`/${el.category}/${el.id}`}>
                  SEE PRODUCT
                </LinkButton>
              </div>
            )
          })}
        </div>
      </div>
    )
}

import classes from './InTheBox.module.css'

export default function InTheBox({ arr }) {
  return (
    <div className={classes.inTheBox}>
      <h2>In the box</h2>
      <ul>
        {arr.map((el) => {
          return (
            <li key={Math.random(1000)}>
              <span className={classes.count}>{el[0]}x </span>
              {el[1]}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

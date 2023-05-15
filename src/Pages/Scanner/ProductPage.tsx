interface IPropsResult {
  result: number
}
export default function ProductPage(props: IPropsResult) {
  return (
    <div>
      <div>
        {props.result}
      </div>
    </div>
  );
}

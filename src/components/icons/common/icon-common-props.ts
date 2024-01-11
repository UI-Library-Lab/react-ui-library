export default interface IIconsCommonProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  ref?: React.RefObject<SVGSVGElement>;
}

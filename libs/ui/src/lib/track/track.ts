// Value from 0 to 20
type MAXIMUM_ALLOWED_GAP_IN_UNITS = 21;

type Mapped<
  N extends number,
  Result extends Array<unknown> = []
> = Result['length'] extends N
  ? Result
  : Mapped<N, [...Result, Result['length']]>;

export type Gap = Mapped<MAXIMUM_ALLOWED_GAP_IN_UNITS>[number];

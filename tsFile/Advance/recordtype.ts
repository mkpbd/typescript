type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
type Day = Weekday | 'Sat' | 'Sun'
// let nextDays: Record<Weekday, Day> = {
//     Mon: 'Sat',
// }

// let nextDay: { [K in Weekday]: Day } = {
//     Mon: "Mon"
// }

type Account = {
    id: number
    isEmployee: boolean
    notes: string[]
}
// Make all fields optional
type OptionalAccount = {
    [K in keyof Account]?: Account[K]
}
// Make all fields nullable
type NullableAccount = {
    [K in keyof Account]: Account[K] | null
}
// Make all fields read-only
type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]
}
// Make all fields writable again (equivalent to Account)
type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: Account[K]
}
// Make all fields required again (equivalent to Account)
type Account3 = {
    [K in keyof OptionalAccount]-?: Account[K]
}
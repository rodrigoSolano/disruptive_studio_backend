export class UserDomain {
  static validateRole(role: string): boolean {
    return ["admin", "reader", "creator"].includes(role);
  }
}

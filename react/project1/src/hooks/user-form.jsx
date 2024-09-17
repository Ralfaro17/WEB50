import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User } from "lucide-react"

export default function Component() {
  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex justify-center">
        <User className="w-16 h-16 text-primary" />
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <RadioGroup defaultValue="user" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin">Admin</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </CardContent>
    </Card>)
  );
}
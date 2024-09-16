'use client'

import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import ExampleNavbarThree from '../../components/Navigation'

export default function PeachProjectForm() {
  const [numParticipants, setNumParticipants] = useState(1)
  const [teamMembers, setTeamMembers] = useState([{ enrollmentNo: '', name: '' }])

  const handleParticipantChange = (e) => {
    const count = parseInt(e.target.value)
    setNumParticipants(count)
    setTeamMembers(Array(count).fill({ enrollmentNo: '', name: '' }))
  }

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index] = { ...updatedMembers[index], [field]: value }
    setTeamMembers(updatedMembers)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1">
      <div className="w-full max-w-screen-lg bg-primary_color2 rounded-lg shadow-lg p-6">
        <ExampleNavbarThree />
        {/* Add margin-top to create more space between navbar and card */}
        <Card className="w-full max-w-2xl mx-auto mt-8 bg-primary_color2"> 
          <CardHeader>
            <CardTitle>Peach Project Submission</CardTitle>
            <CardDescription>Enter the details of your peach project</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input id="projectName" placeholder="Enter project name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamLeader">Project Team Leader</Label>
                <Input id="teamLeader" placeholder="Enter team leader's name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="numParticipants">Number of Participants</Label>
                <Input 
                  id="numParticipants" 
                  type="number" 
                  min="1" 
                  value={numParticipants} 
                  onChange={handleParticipantChange}
                  required 
                />
              </div>

              {teamMembers.map((member, index) => (
                <div key={index} className="space-y-2 border p-4 rounded-md bg-primary_color2">
                  <h3 className="font-semibold">Team Member {index + 1}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor={`enrollmentNo-${index}`}>Enrollment No</Label>
                      <Input 
                        id={`enrollmentNo-${index}`}
                        value={member.enrollmentNo}
                        onChange={(e) => handleTeamMemberChange(index, 'enrollmentNo', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`name-${index}`}>Name</Label>
                      <Input 
                        id={`name-${index}`}
                        value={member.name}
                        onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-2">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea id="projectDescription" placeholder="Describe your project" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies Used</Label>
                <Input id="technologies" placeholder="e.g., React, Node.js, MongoDB" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pptUpload">Upload PPT</Label>
                <Input id="pptUpload" type="file" accept=".ppt,.pptx" required />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-primary_color2">Submit Project</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

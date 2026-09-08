import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Zap, TrendingUp, Clock, DollarSign, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timeEstimate: string;
  category: string;
  completed: boolean;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete Profile Setup',
      description: 'Fill in your profile information and add a profile picture',
      reward: 50,
      difficulty: 'easy',
      timeEstimate: '5 min',
      category: 'Setup',
      completed: true,
    },
    {
      id: '2',
      title: 'Write Product Review',
      description: 'Share your thoughts on any product you\'ve used',
      reward: 150,
      difficulty: 'medium',
      timeEstimate: '15 min',
      category: 'Content',
      completed: false,
    },
    {
      id: '3',
      title: 'Refer a Friend',
      description: 'Invite someone to join TASKEARN',
      reward: 300,
      difficulty: 'medium',
      timeEstimate: '10 min',
      category: 'Social',
      completed: false,
    },
    {
      id: '4',
      title: 'Complete Survey',
      description: 'Answer questions about your preferences',
      reward: 100,
      difficulty: 'easy',
      timeEstimate: '8 min',
      category: 'Survey',
      completed: false,
    },
    {
      id: '5',
      title: 'Test New Feature',
      description: 'Try out our beta features and provide feedback',
      reward: 250,
      difficulty: 'hard',
      timeEstimate: '30 min',
      category: 'Testing',
      completed: false,
    },
  ]);

  const totalEarnings = 50;
  const completedCount = tasks.filter(t => t.completed).length;
  const completionRate = Math.round((completedCount / tasks.length) * 100);
  const availableEarnings = tasks.filter(t => !t.completed).reduce((sum, t) => sum + t.reward, 0);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-emerald-100 text-emerald-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'hard':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">TASKEARN</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">Welcome back!</p>
            <p className="text-lg font-semibold text-slate-900">You've earned ${totalEarnings}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-blue-500" />
                Total Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">${totalEarnings}</p>
              <p className="text-xs text-slate-500 mt-1">Lifetime earnings</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">${availableEarnings}</p>
              <p className="text-xs text-slate-500 mt-1">In pending tasks</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">{completedCount}</p>
              <p className="text-xs text-slate-500 mt-1">of {tasks.length} tasks</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">{completionRate}%</p>
              <Progress value={completionRate} className="mt-2 h-1.5" />
            </CardContent>
          </Card>
        </div>

        {/* Tasks Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Available Tasks</h2>
            <p className="text-slate-600">Complete tasks to earn rewards</p>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <Card
                key={task.id}
                className={`border-slate-200 transition-all ${
                  task.completed ? 'bg-slate-50 opacity-75' : 'hover:shadow-md'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="mt-1 flex-shrink-0 focus:outline-none"
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            task.completed
                              ? 'bg-emerald-500 border-emerald-500'
                              : 'border-slate-300 hover:border-emerald-500'
                          }`}
                        >
                          {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-semibold ${
                              task.completed ? 'text-slate-500 line-through' : 'text-slate-900'
                            }`}
                          >
                            {task.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {task.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{task.description}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.timeEstimate}
                          </span>
                          <Badge className={`${getDifficultyColor(task.difficulty)} text-xs`}>
                            {task.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">${task.reward}</p>
                        <p className="text-xs text-slate-500">reward</p>
                      </div>
                      <Button
                        onClick={() => toggleTask(task.id)}
                        size="sm"
                        variant={task.completed ? 'outline' : 'default'}
                        className={task.completed ? '' : 'bg-blue-600 hover:bg-blue-700'}
                      >
                        {task.completed ? 'Undo' : 'Start'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What's Next Section */}
        <div className="mt-12 p-6 bg-white rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3">💡 What's next?</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• User authentication and account management</li>
            <li>• Task categories and filtering</li>
            <li>• Leaderboard and achievements</li>
            <li>• Payment/withdrawal system</li>
            <li>• Task creation dashboard for admins</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;

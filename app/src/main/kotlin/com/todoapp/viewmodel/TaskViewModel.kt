package com.todoapp.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.todoapp.models.Task
import com.todoapp.repository.TaskRepository
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

/**
 * ViewModel for task list operations
 * Manages task data and business logic
 */
class TaskViewModel(private val repository: TaskRepository) : ViewModel() {

    // State management
    private val _uiState = MutableStateFlow<TaskUiState>(TaskUiState.Loading)
    val uiState: StateFlow<TaskUiState> = _uiState.asStateFlow()

    // Current filter
    private val _filterState = MutableStateFlow<FilterType>(FilterType.ALL)
    val filterState: StateFlow<FilterType> = _filterState.asStateFlow()

    // Search state
    private val _searchQuery = MutableStateFlow("")
    val searchQuery: StateFlow<String> = _searchQuery.asStateFlow()

    // Statistics
    val activeTaskCount = repository.getActiveTaskCount().stateIn(viewModelScope, SharingStarted.Lazily, 0)
    val completedTaskCount = repository.getCompletedTaskCount().stateIn(viewModelScope, SharingStarted.Lazily, 0)
    val overdueTaskCount = repository.getOverdueTaskCount().stateIn(viewModelScope, SharingStarted.Lazily, 0)
    val totalTaskCount = repository.getTotalTaskCount().stateIn(viewModelScope, SharingStarted.Lazily, 0)

    // Main task flow based on filter
    val tasks: Flow<List<Task>> = filterState.flatMapLatest { filter ->
        when (filter) {
            FilterType.ALL -> repository.getAllTasks()
            FilterType.ACTIVE -> repository.getActiveTasks()
            FilterType.COMPLETED -> repository.getCompletedTasks()
            FilterType.OVERDUE -> repository.getOverdueTasks()
            FilterType.TODAY -> repository.getTodayTasks()
        }
    }

    // Add new task
    fun addTask(title: String, description: String = "", categoryId: Long? = null, priority: Task.Priority = Task.Priority.MEDIUM, dueDate: Long? = null) {
        viewModelScope.launch {
            try {
                val task = Task(
                    title = title,
                    description = description,
                    categoryId = categoryId,
                    priority = priority,
                    dueDate = dueDate
                )
                repository.addTask(task)
                _uiState.value = TaskUiState.Success("Task added successfully")
            } catch (e: Exception) {
                _uiState.value = TaskUiState.Error(e.message ?: "Error adding task")
            }
        }
    }

    // Update task
    fun updateTask(task: Task) {
        viewModelScope.launch {
            try {
                repository.updateTask(task)
                _uiState.value = TaskUiState.Success("Task updated")
            } catch (e: Exception) {
                _uiState.value = TaskUiState.Error(e.message ?: "Error updating task")
            }
        }
    }

    // Toggle task completion
    fun toggleTaskCompletion(taskId: Long, currentStatus: Boolean) {
        viewModelScope.launch {
            try {
                repository.updateTaskCompletion(taskId, !currentStatus)
                _uiState.value = TaskUiState.Success(if (!currentStatus) "Task completed" else "Task reopened")
            } catch (e: Exception) {
                _uiState.value = TaskUiState.Error(e.message ?: "Error updating task")
            }
        }
    }

    // Delete task
    fun deleteTask(task: Task) {
        viewModelScope.launch {
            try {
                repository.deleteTask(task)
                _uiState.value = TaskUiState.Success("Task deleted")
            } catch (e: Exception) {
                _uiState.value = TaskUiState.Error(e.message ?: "Error deleting task")
            }
        }
    }

    // Delete completed tasks
    fun deleteCompletedTasks() {
        viewModelScope.launch {
            try {
                val deletedCount = repository.deleteCompletedTasks()
                _uiState.value = TaskUiState.Success("Deleted $deletedCount completed tasks")
            } catch (e: Exception) {
                _uiState.value = TaskUiState.Error(e.message ?: "Error deleting tasks")
            }
        }
    }

    // Filter tasks
    fun setFilter(filter: FilterType) {
        _filterState.value = filter
    }

    // Search tasks
    fun searchTasks(query: String) {
        _searchQuery.value = query
        viewModelScope.launch {
            try {
                repository.searchTasks(query).collect {
                    _uiState.value = TaskUiState.Success("Search results loaded")
                }
            } catch (e: Exception) {
                _uiState.value = TaskUiState.Error(e.message ?: "Error searching")
            }
        }
    }

    enum class FilterType {
        ALL, ACTIVE, COMPLETED, OVERDUE, TODAY
    }

    sealed class TaskUiState {
        object Loading : TaskUiState()
        data class Success(val message: String = "") : TaskUiState()
        data class Error(val message: String) : TaskUiState()
    }
}

package com.todoapp.models

import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Category data model
 * Represents a task category
 */
@Entity(tableName = "categories")
data class Category(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val name: String,
    val color: String = "#2196F3", // Hex color code
    val icon: String = "folder", // Icon name
    val createdAt: Long = System.currentTimeMillis()
) {
    companion object {
        // Default categories
        fun getDefaults(): List<Category> {
            return listOf(
                Category(name = "Work", color = "#2196F3", icon = "work"),
                Category(name = "Personal", color = "#4CAF50", icon = "person"),
                Category(name = "Shopping", color = "#FF9800", icon = "shopping_cart"),
                Category(name = "Health", color = "#F44336", icon = "favorite"),
                Category(name = "Finance", color = "#9C27B0", icon = "attach_money")
            )
        }
    }
}
